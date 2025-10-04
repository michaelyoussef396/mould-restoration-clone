import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRealTimeCommunication } from '@/hooks/useRealTimeCommunication';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarInset,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from '@/components/ui/sidebar';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';
import {
  MessageSquare,
  Phone,
  Send,
  Plus,
  Settings,
  Bell,
  Clock,
  Users,
  Search,
  Paperclip,
  Image,
  MapPin,
  Calendar,
  CheckCircle2,
  AlertTriangle,
  Wifi,
  WifiOff,
  UserCheck,
  MessageCircle,
  Zap,
  Home,
  Building,
  Car,
  PhoneCall,
  Mail,
  Camera,
  FileText,
  Hash,
  MoreHorizontal,
  Star,
  Archive,
  Trash2,
  RefreshCw
} from 'lucide-react';
import { toast } from 'sonner';
import { format, isToday, isYesterday } from 'date-fns';
import { cn } from '@/lib/utils';

// Types for real-time communication
interface ChatMessage {
  id: string;
  senderId: string;
  senderName: string;
  senderRole: 'admin' | 'technician' | 'customer';
  content: string;
  type: 'text' | 'image' | 'file' | 'location' | 'template' | 'system';
  timestamp: Date;
  read: boolean;
  reactions?: { emoji: string; users: string[] }[];
  attachments?: { id: string; name: string; url: string; type: string }[];
  metadata?: any;
}

interface ChatThread {
  id: string;
  type: 'direct' | 'group' | 'customer' | 'emergency';
  name: string;
  description?: string;
  participants: Participant[];
  lastMessage?: ChatMessage;
  unreadCount: number;
  pinned: boolean;
  archived: boolean;
  createdAt: Date;
  updatedAt: Date;
  metadata?: {
    leadId?: string;
    inspectionId?: string;
    propertyAddress?: string;
    priority?: 'low' | 'medium' | 'high' | 'emergency';
    suburb?: string;
  };
}

interface Participant {
  id: string;
  name: string;
  role: 'admin' | 'technician' | 'customer';
  avatar?: string;
  status: 'online' | 'offline' | 'busy' | 'in-field';
  lastSeen?: Date;
  location?: {
    latitude: number;
    longitude: number;
    address: string;
    timestamp: Date;
  };
}

interface MelbourneTemplate {
  id: string;
  name: string;
  category: 'pre-inspection' | 'during-inspection' | 'post-inspection' | 'emergency' | 'follow-up';
  suburb?: string;
  content: string;
  variables: string[];
  useCount: number;
  lastUsed?: Date;
}

// Melbourne-specific communication templates
const melbourneTemplates: MelbourneTemplate[] = [
  {
    id: 'pre-inspection-carlton',
    name: 'Pre-Inspection Arrival - Carlton',
    category: 'pre-inspection',
    suburb: 'Carlton',
    content: "Good morning! This is {{technicianName}} from Mould & Restoration Co. We'll arrive at your Carlton property ({{address}}) between {{timeWindow}} for the mould inspection. I'll call when I'm 10 minutes away. Please ensure access to all areas mentioned during booking.",
    variables: ['technicianName', 'address', 'timeWindow'],
    useCount: 24,
    lastUsed: new Date('2024-01-15')
  },
  {
    id: 'during-inspection-richmond',
    name: 'Inspection Progress - Richmond',
    category: 'during-inspection',
    suburb: 'Richmond',
    content: "Currently conducting thorough mould assessment at your Richmond home. Found {{findings}} in the {{area}}. Taking detailed photos and moisture readings. Estimated completion in {{estimatedTime}}. Will provide full verbal report before leaving.",
    variables: ['findings', 'area', 'estimatedTime'],
    useCount: 18,
    lastUsed: new Date('2024-01-14')
  },
  {
    id: 'post-inspection-toorak',
    name: 'Inspection Complete - Toorak',
    category: 'post-inspection',
    suburb: 'Toorak',
    content: "Inspection complete at your Toorak property. {{summaryFindings}}. Comprehensive report with photos and recommendations will be emailed within 2 hours. Thank you for choosing Mould & Restoration Co. Any immediate questions?",
    variables: ['summaryFindings'],
    useCount: 31,
    lastUsed: new Date('2024-01-16')
  },
  {
    id: 'emergency-response',
    name: 'Emergency Response',
    category: 'emergency',
    content: "URGENT: We've received your emergency mould report. {{technicianName}} is en route to {{address}} and will arrive within {{eta}}. Please ensure the affected area is isolated if safe to do so. Emergency contact: 1800-MOULD-HELP",
    variables: ['technicianName', 'address', 'eta'],
    useCount: 7,
    lastUsed: new Date('2024-01-12')
  },
  {
    id: 'follow-up-brighton',
    name: 'Follow-up Check - Brighton',
    category: 'follow-up',
    suburb: 'Brighton',
    content: "Hi! Following up on the mould remediation completed at your Brighton property. How are things going? Any concerns or questions? We offer a 12-month warranty on all work. Your satisfaction is our priority.",
    variables: [],
    useCount: 15,
    lastUsed: new Date('2024-01-10')
  }
];

// Mock data for demonstration
const mockTechnicians: Participant[] = [
  {
    id: 'tech-james',
    name: 'James Wilson',
    role: 'technician',
    avatar: '/avatars/james.jpg',
    status: 'in-field',
    lastSeen: new Date(),
    location: {
      latitude: -37.8136,
      longitude: 144.9631,
      address: 'Carlton, VIC',
      timestamp: new Date()
    }
  },
  {
    id: 'tech-emma',
    name: 'Emma Davis',
    role: 'technician',
    avatar: '/avatars/emma.jpg',
    status: 'online',
    lastSeen: new Date(Date.now() - 5 * 60 * 1000)
  },
  {
    id: 'admin-sarah',
    name: 'Sarah Chen',
    role: 'admin',
    avatar: '/avatars/sarah.jpg',
    status: 'online',
    lastSeen: new Date()
  }
];

const mockChatThreads: ChatThread[] = [
  {
    id: 'thread-1',
    type: 'customer',
    name: 'John Smith - Carlton Inspection',
    participants: [mockTechnicians[0], mockTechnicians[2]],
    lastMessage: {
      id: 'msg-1',
      senderId: 'tech-james',
      senderName: 'James Wilson',
      senderRole: 'technician',
      content: 'Inspection complete. Found significant moisture behind kitchen tiles. Sending photos now.',
      type: 'text',
      timestamp: new Date(Date.now() - 5 * 60 * 1000),
      read: false
    },
    unreadCount: 2,
    pinned: true,
    archived: false,
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - 5 * 60 * 1000),
    metadata: {
      leadId: 'lead-123',
      inspectionId: 'insp-456',
      propertyAddress: '123 Lygon Street, Carlton VIC 3053',
      priority: 'high',
      suburb: 'Carlton'
    }
  },
  {
    id: 'thread-2',
    type: 'direct',
    name: 'Team Coordination',
    participants: mockTechnicians,
    lastMessage: {
      id: 'msg-2',
      senderId: 'admin-sarah',
      senderName: 'Sarah Chen',
      senderRole: 'admin',
      content: 'Emma, can you take the 2PM Toorak inspection? James is running late from Carlton.',
      type: 'text',
      timestamp: new Date(Date.now() - 15 * 60 * 1000),
      read: true
    },
    unreadCount: 0,
    pinned: false,
    archived: false,
    createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - 15 * 60 * 1000)
  },
  {
    id: 'thread-3',
    type: 'emergency',
    name: 'URGENT: Water Damage - Richmond',
    participants: [mockTechnicians[1], mockTechnicians[2]],
    lastMessage: {
      id: 'msg-3',
      senderId: 'tech-emma',
      senderName: 'Emma Davis',
      senderRole: 'technician',
      content: 'On my way to Richmond emergency. ETA 20 minutes.',
      type: 'text',
      timestamp: new Date(Date.now() - 30 * 60 * 1000),
      read: true
    },
    unreadCount: 0,
    pinned: true,
    archived: false,
    createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000),
    updatedAt: new Date(Date.now() - 30 * 60 * 1000),
    metadata: {
      priority: 'emergency',
      suburb: 'Richmond'
    }
  }
];

export function CommunicationHub() {
  const { user, isAdmin, isTechnician } = useAuth();

  // Real-time communication hook
  const {
    isConnected,
    loading,
    error,
    threads,
    templates,
    onlineUsers,
    sendMessage,
    sendTypingIndicator,
    getThreadMessages,
    getTypingUsers,
    getUnreadCount,
    getOnlineParticipants,
    loadThreads,
    loadTemplates,
    useTemplate,
    uploadFile,
    createThread,
    markAsRead
  } = useRealTimeCommunication({
    autoConnect: true,
    enableLocationSharing: isTechnician,
    typingTimeout: 3000
  });

  const [selectedThread, setSelectedThread] = useState<ChatThread | null>(null);
  const [message, setMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showTemplates, setShowTemplates] = useState(false);
  const [showCreateThread, setShowCreateThread] = useState(false);
  const [newThreadData, setNewThreadData] = useState({
    type: 'direct' as const,
    name: '',
    participantIds: [] as string[]
  });
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load initial data
  useEffect(() => {
    if (isConnected) {
      loadThreads();
      loadTemplates();
    }
  }, [isConnected, loadThreads, loadTemplates]);

  // Auto-select first thread
  useEffect(() => {
    if (threads.length > 0 && !selectedThread) {
      setSelectedThread(threads[0]);
    }
  }, [threads, selectedThread]);

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [selectedThread]);

  const handleSendMessage = async () => {
    if (!message.trim() || !selectedThread) return;

    try {
      await sendMessage(selectedThread.id, message);
      setMessage('');
      setIsTyping(false);
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  const handleTemplateSelect = async (template: MelbourneTemplate) => {
    try {
      if (template.variables.length > 0) {
        // For now, use template content directly
        // In a real implementation, you'd show a form to fill variables
        const renderedContent = await useTemplate(template.id, {});
        setMessage(renderedContent);
      } else {
        setMessage(template.content);
      }
      setShowTemplates(false);
    } catch (error) {
      console.error('Failed to apply template:', error);
      setMessage(template.content); // Fallback to raw content
      setShowTemplates(false);
    }
  };

  const handleCreateThread = async () => {
    if (!newThreadData.name.trim() || newThreadData.participantIds.length === 0) {
      toast.error('Please provide thread name and select participants');
      return;
    }

    try {
      const thread = await createThread(newThreadData);
      setSelectedThread(thread);
      setShowCreateThread(false);
      setNewThreadData({
        type: 'direct',
        name: '',
        participantIds: []
      });
      toast.success('Conversation created');
    } catch (error) {
      console.error('Failed to create thread:', error);
    }
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !selectedThread) return;

    try {
      const attachment = await uploadFile(file, selectedThread.id);
      await sendMessage(selectedThread.id, `Shared file: ${file.name}`, {
        type: 'file',
        attachments: [attachment]
      });
    } catch (error) {
      console.error('Failed to upload file:', error);
    }
  };

  const handleTyping = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);

    if (!isTyping && selectedThread) {
      setIsTyping(true);
      sendTypingIndicator(selectedThread.id);
    }
  };

  const formatMessageTime = (timestamp: Date) => {
    if (isToday(timestamp)) {
      return format(timestamp, 'h:mm a');
    } else if (isYesterday(timestamp)) {
      return `Yesterday ${format(timestamp, 'h:mm a')}`;
    } else {
      return format(timestamp, 'MMM d, h:mm a');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'in-field': return 'bg-blue-500';
      case 'busy': return 'bg-yellow-500';
      case 'offline': return 'bg-gray-400';
      default: return 'bg-gray-400';
    }
  };

  const getPriorityColor = (priority?: string) => {
    switch (priority) {
      case 'emergency': return 'border-l-red-500 bg-red-50';
      case 'high': return 'border-l-orange-500 bg-orange-50';
      case 'medium': return 'border-l-yellow-500 bg-yellow-50';
      case 'low': return 'border-l-green-500 bg-green-50';
      default: return 'border-l-gray-500 bg-gray-50';
    }
  };

  const filteredThreads = threads.filter(thread =>
    thread.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    thread.metadata?.suburb?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredTemplates = templates.filter(template =>
    template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    template.suburb?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentMessages = selectedThread ? getThreadMessages(selectedThread.id) : [];
  const typingUsers = selectedThread ? getTypingUsers(selectedThread.id) : [];
  const totalUnreadCount = getUnreadCount();

  // Show error state if not connected
  if (error && !isConnected) {
    return (
      <div className="flex items-center justify-center h-screen bg-background">
        <div className="text-center space-y-4">
          <AlertTriangle className="h-16 w-16 mx-auto text-destructive" />
          <div>
            <h3 className="text-lg font-semibold mb-2">Connection Error</h3>
            <p className="text-muted-foreground mb-4">{error}</p>
            <Button onClick={() => setError(null)}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Retry Connection
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Show loading state during initial connection
  if (loading && !isConnected) {
    return (
      <div className="flex items-center justify-center h-screen bg-background">
        <div className="text-center space-y-4">
          <RefreshCw className="h-16 w-16 mx-auto text-muted-foreground animate-spin" />
          <div>
            <h3 className="text-lg font-semibold mb-2">Connecting to Communication Hub</h3>
            <p className="text-muted-foreground">Setting up real-time messaging...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex h-screen bg-background">
        {/* Left Sidebar - Navigation & Threads */}
        <Sidebar side="left" className="w-80">
          <SidebarHeader className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-semibold">Communications</h2>
                {totalUnreadCount > 0 && (
                  <Badge variant="destructive" className="h-5 w-5 p-0 flex items-center justify-center text-xs">
                    {totalUnreadCount}
                  </Badge>
                )}
              </div>
              <div className="flex items-center gap-2">
                {loading && <RefreshCw className="w-3 h-3 animate-spin" />}
                <div className={cn("w-2 h-2 rounded-full", isConnected ? "bg-green-500" : "bg-red-500")} />
                <span className="text-xs text-muted-foreground">
                  {isConnected ? 'Connected' : 'Disconnected'}
                </span>
              </div>
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search conversations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8"
              />
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Active Conversations</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {filteredThreads.map((thread) => (
                    <SidebarMenuItem key={thread.id}>
                      <SidebarMenuButton
                        isActive={selectedThread?.id === thread.id}
                        onClick={() => setSelectedThread(thread)}
                        className="flex items-start gap-3 p-3 hover:bg-accent"
                      >
                        <div className="relative">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={thread.participants[0]?.avatar} />
                            <AvatarFallback>
                              {thread.type === 'emergency' ? '🚨' :
                               thread.type === 'customer' ? '👤' : '👥'}
                            </AvatarFallback>
                          </Avatar>
                          {thread.participants[0]?.status && (
                            <div className={cn(
                              "absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-background",
                              getStatusColor(thread.participants[0].status)
                            )} />
                          )}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="font-medium text-sm truncate">{thread.name}</p>
                            <div className="flex items-center gap-1">
                              {thread.pinned && <Star className="h-3 w-3 text-yellow-500 fill-current" />}
                              {thread.unreadCount > 0 && (
                                <Badge variant="destructive" className="h-5 w-5 p-0 flex items-center justify-center text-xs">
                                  {thread.unreadCount}
                                </Badge>
                              )}
                            </div>
                          </div>

                          {thread.lastMessage && (
                            <p className="text-xs text-muted-foreground truncate">
                              {thread.lastMessage.senderName}: {thread.lastMessage.content}
                            </p>
                          )}

                          <div className="flex items-center justify-between mt-1">
                            <span className="text-xs text-muted-foreground">
                              {thread.lastMessage && formatMessageTime(thread.lastMessage.timestamp)}
                            </span>
                            {thread.metadata?.suburb && (
                              <Badge variant="outline" className="text-xs">
                                {thread.metadata.suburb}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="p-4 space-y-2">
            <Button onClick={() => setShowCreateThread(true)} variant="outline" className="w-full">
              <Plus className="h-4 w-4 mr-2" />
              New Conversation
            </Button>
            <Button onClick={() => setShowTemplates(true)} variant="outline" className="w-full">
              <MessageSquare className="h-4 w-4 mr-2" />
              Quick Templates
            </Button>
          </SidebarFooter>
        </Sidebar>

        {/* Main Chat Area */}
        <SidebarInset className="flex-1">
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel defaultSize={75}>
              {selectedThread ? (
                <div className="flex flex-col h-full">
                  {/* Chat Header */}
                  <div className={cn(
                    "flex items-center justify-between p-4 border-b border-l-4",
                    getPriorityColor(selectedThread.metadata?.priority)
                  )}>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={selectedThread.participants[0]?.avatar} />
                        <AvatarFallback>
                          {selectedThread.type === 'emergency' ? '🚨' :
                           selectedThread.type === 'customer' ? '👤' : '👥'}
                        </AvatarFallback>
                      </Avatar>

                      <div>
                        <h3 className="font-semibold">{selectedThread.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          {selectedThread.metadata?.propertyAddress && (
                            <>
                              <MapPin className="h-3 w-3" />
                              <span>{selectedThread.metadata.propertyAddress}</span>
                            </>
                          )}
                          {selectedThread.metadata?.priority === 'emergency' && (
                            <Badge variant="destructive" className="text-xs">
                              EMERGENCY
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Phone className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Calendar className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Messages Area */}
                  <ScrollArea className="flex-1 p-4">
                    <div className="space-y-4">
                      {currentMessages.map((message) => (
                        <div
                          key={message.id}
                          className={cn(
                            "flex items-start gap-3",
                            message.senderId === user?.id ? "justify-end" : ""
                          )}
                        >
                          {message.senderId !== user?.id && (
                            <Avatar className="h-8 w-8">
                              <AvatarFallback>
                                {message.senderName.split(' ').map(n => n[0]).join('').toUpperCase()}
                              </AvatarFallback>
                            </Avatar>
                          )}

                          <div className={cn("flex-1", message.senderId === user?.id ? "flex justify-end" : "")}>
                            {message.senderId !== user?.id && (
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-medium text-sm">{message.senderName}</span>
                                <span className="text-xs text-muted-foreground">
                                  {formatMessageTime(message.timestamp)}
                                </span>
                              </div>
                            )}

                            <div className={cn(
                              "p-3 rounded-lg max-w-md",
                              message.senderId === user?.id
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted"
                            )}>
                              {message.content}

                              {message.attachments && message.attachments.length > 0 && (
                                <div className="mt-2 space-y-1">
                                  {message.attachments.map((attachment) => (
                                    <div key={attachment.id} className="flex items-center gap-2 text-xs">
                                      <Paperclip className="h-3 w-3" />
                                      <span>{attachment.name}</span>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>

                            {message.senderId === user?.id && (
                              <div className="text-xs text-muted-foreground mt-1 text-right">
                                {formatMessageTime(message.timestamp)}
                                {message.read && <CheckCircle2 className="h-3 w-3 inline ml-1" />}
                              </div>
                            )}
                          </div>

                          {message.senderId === user?.id && (
                            <Avatar className="h-8 w-8">
                              <AvatarFallback>
                                {user?.name?.split(' ').map(n => n[0]).join('').toUpperCase() || 'YOU'}
                              </AvatarFallback>
                            </Avatar>
                          )}
                        </div>
                      ))}

                      {typingUsers.length > 0 && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" />
                            <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.1s' }} />
                            <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }} />
                          </div>
                          <span>{typingUsers.join(', ')} {typingUsers.length === 1 ? 'is' : 'are'} typing...</span>
                        </div>
                      )}

                      <div ref={messagesEndRef} />
                    </div>
                  </ScrollArea>

                  {/* Message Input */}
                  <div className="p-4 border-t">
                    <div className="flex items-end gap-2">
                      <div className="flex-1">
                        <Textarea
                          placeholder="Type your message..."
                          value={message}
                          onChange={handleTyping}
                          onKeyPress={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                              e.preventDefault();
                              handleSendMessage();
                            }
                          }}
                          className="min-h-[60px] resize-none"
                          disabled={!isConnected}
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <input
                          type="file"
                          ref={fileInputRef}
                          onChange={handleFileUpload}
                          style={{ display: 'none' }}
                          accept="image/*,.pdf,.doc,.docx,.txt"
                        />
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => fileInputRef.current?.click()}
                          disabled={!isConnected || !selectedThread}
                        >
                          <Paperclip className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => fileInputRef.current?.click()}
                          disabled={!isConnected || !selectedThread}
                        >
                          <Camera className="h-4 w-4" />
                        </Button>
                        <Button
                          onClick={handleSendMessage}
                          disabled={!message.trim() || !isConnected || !selectedThread}
                        >
                          <Send className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <MessageCircle className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No conversation selected</h3>
                    <p className="text-muted-foreground">Choose a conversation to start messaging</p>
                  </div>
                </div>
              )}
            </ResizablePanel>

            <ResizableHandle withHandle />

            {/* Right Sidebar - Team & Quick Actions */}
            <ResizablePanel defaultSize={25} minSize={20}>
              <div className="h-full p-4 border-l">
                <Tabs defaultValue="team" className="h-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="team">Team</TabsTrigger>
                    <TabsTrigger value="templates">Templates</TabsTrigger>
                    <TabsTrigger value="actions">Actions</TabsTrigger>
                  </TabsList>

                  <TabsContent value="team" className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-3">Online Team Members</h4>
                      <div className="space-y-3">
                        {onlineUsers.map((user) => (
                          <div key={user.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent">
                            <div className="relative">
                              <Avatar className="h-8 w-8">
                                <AvatarImage src={user.avatar} />
                                <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                              </Avatar>
                              <div className={cn(
                                "absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-background",
                                getStatusColor(user.status)
                              )} />
                            </div>

                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-sm">{user.name}</p>
                              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                <span className="capitalize">{user.status}</span>
                                {user.location && (
                                  <>
                                    <span>•</span>
                                    <MapPin className="h-3 w-3" />
                                    <span>{user.location.address}</span>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}

                        {onlineUsers.length === 0 && (
                          <div className="text-center text-muted-foreground text-sm py-4">
                            No team members online
                          </div>
                        )}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="templates" className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-3">Melbourne Templates</h4>
                      <div className="space-y-2">
                        {filteredTemplates.slice(0, 5).map((template) => (
                          <Button
                            key={template.id}
                            variant="outline"
                            size="sm"
                            className="w-full justify-start h-auto p-3"
                            onClick={() => handleTemplateSelect(template)}
                          >
                            <div className="text-left">
                              <p className="font-medium text-sm">{template.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {template.suburb && `${template.suburb} • `}
                                Used {template.useCount} times
                              </p>
                            </div>
                          </Button>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="actions" className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-3">Quick Actions</h4>
                      <div className="space-y-2">
                        <Button variant="outline" size="sm" className="w-full justify-start">
                          <Calendar className="h-4 w-4 mr-2" />
                          Schedule Inspection
                        </Button>
                        <Button variant="outline" size="sm" className="w-full justify-start">
                          <FileText className="h-4 w-4 mr-2" />
                          Generate Report
                        </Button>
                        <Button variant="outline" size="sm" className="w-full justify-start">
                          <Mail className="h-4 w-4 mr-2" />
                          Send Email Update
                        </Button>
                        <Button variant="outline" size="sm" className="w-full justify-start">
                          <Car className="h-4 w-4 mr-2" />
                          Track Technician
                        </Button>
                        <Button variant="destructive" size="sm" className="w-full justify-start">
                          <AlertTriangle className="h-4 w-4 mr-2" />
                          Emergency Alert
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </SidebarInset>

        {/* Create Thread Dialog */}
        <Dialog open={showCreateThread} onOpenChange={setShowCreateThread}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Create New Conversation</DialogTitle>
              <DialogDescription>
                Start a new conversation with team members or customers
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
              <div>
                <Label>Conversation Type</Label>
                <Select
                  value={newThreadData.type}
                  onValueChange={(value: any) => setNewThreadData(prev => ({ ...prev, type: value }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="direct">Direct Message</SelectItem>
                    <SelectItem value="group">Group Chat</SelectItem>
                    <SelectItem value="customer">Customer Support</SelectItem>
                    <SelectItem value="emergency">Emergency Channel</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Conversation Name</Label>
                <Input
                  placeholder="Enter conversation name"
                  value={newThreadData.name}
                  onChange={(e) => setNewThreadData(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>

              <div>
                <Label>Participants</Label>
                <div className="text-sm text-muted-foreground mb-2">
                  Select team members to include in this conversation
                </div>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {onlineUsers.map((user) => (
                    <div key={user.id} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id={user.id}
                        checked={newThreadData.participantIds.includes(user.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setNewThreadData(prev => ({
                              ...prev,
                              participantIds: [...prev.participantIds, user.id]
                            }));
                          } else {
                            setNewThreadData(prev => ({
                              ...prev,
                              participantIds: prev.participantIds.filter(id => id !== user.id)
                            }));
                          }
                        }}
                        className="rounded"
                      />
                      <label htmlFor={user.id} className="text-sm font-medium">
                        {user.name} ({user.role})
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setShowCreateThread(false)}>
                  Cancel
                </Button>
                <Button onClick={handleCreateThread} disabled={loading}>
                  {loading && <RefreshCw className="h-4 w-4 mr-2 animate-spin" />}
                  Create Conversation
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Templates Dialog */}
        <Dialog open={showTemplates} onOpenChange={setShowTemplates}>
          <DialogContent className="max-w-4xl max-h-[80vh]">
            <DialogHeader>
              <DialogTitle>Melbourne Communication Templates</DialogTitle>
              <DialogDescription>
                Select a pre-written template for common Melbourne inspection scenarios
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search templates by name or suburb..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8"
                />
              </div>

              <ScrollArea className="h-96">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredTemplates.map((template) => (
                    <Card key={template.id} className="cursor-pointer hover:shadow-md transition-shadow">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-sm">{template.name}</CardTitle>
                          <Badge variant="outline" className="text-xs">
                            {template.category}
                          </Badge>
                        </div>
                        {template.suburb && (
                          <Badge variant="secondary" className="w-fit text-xs">
                            <MapPin className="h-3 w-3 mr-1" />
                            {template.suburb}
                          </Badge>
                        )}
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                          {template.content.substring(0, 120)}...
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">
                            Used {template.useCount} times
                          </span>
                          <Button
                            size="sm"
                            onClick={() => handleTemplateSelect(template)}
                          >
                            Use Template
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </SidebarProvider>
  );
}