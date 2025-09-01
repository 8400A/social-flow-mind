import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Send, Music, Camera, Users, MessageCircle } from "lucide-react";
import { PlatformSelector } from "./PlatformSelector";

interface Message {
  id: string;
  type: 'user' | 'ai' | 'activity';
  content: string;
  timestamp: string;
  status?: string;
}

interface Platform {
  id: string;
  name: string;
  icon: any;
  isActive: boolean;
}

interface CommandActivityStreamProps {
  selectedPlatforms: Platform[];
  onTogglePlatform: (platformId: string) => void;
}

export const CommandActivityStream = ({ selectedPlatforms, onTogglePlatform }: CommandActivityStreamProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'user',
      content: "Find out the key trends in 'sustainable fashion' across TikTok, Instagram, X, and Facebook for the last 30 days.",
      timestamp: '12:15 PM'
    },
    {
      id: '2',
      type: 'ai',
      content: "Certainly. To give you the best insights, could you clarify what aspects of \"trends\" are most important to you?\nA) Emerging hashtags and keywords\nB) Top-performing content formats (e.g., videos, carousels)\nC) Sentiment analysis (how people feel about it)\nD) Key influencers driving the conversation\nE) All of the above",
      timestamp: '12:15 PM'
    },
    {
      id: '3',
      type: 'user',
      content: "Let's go with E) All of the above. I want a complete picture.",
      timestamp: '12:16 PM'
    },
    {
      id: '4',
      type: 'ai',
      content: "Understood. I am starting a comprehensive analysis of 'sustainable fashion' across all four platforms for the last 30 days. I will focus on hashtags, content formats, sentiment, and key influencers.\n\nThe Plan tab on your left has now been populated with my full strategy. The dashboard will update as I complete each step.",
      timestamp: '12:16 PM'
    },
    {
      id: '5',
      type: 'activity',
      content: "🟢 [STATUS] Agent initialized for comprehensive analysis.\n🔍 [QUERYING] Accessing TikTok API with search terms: '#SustainableFashion', '#ThriftHaul'...",
      timestamp: '12:17 PM'
    },
    {
      id: '6',
      type: 'activity',
      content: "📥 [EXTRACTING] Collected 8,500 video metadata objects from TikTok.\n🔍 [QUERYING] Accessing Instagram public hashtag pages...",
      timestamp: '12:18 PM'
    },
    {
      id: '7',
      type: 'ai',
      content: "I've gathered the initial data from TikTok and Instagram. The sentiment appears strongly positive, especially around DIY and upcycling content. I am now proceeding to query X and Facebook.",
      timestamp: '12:19 PM'
    },
    {
      id: '8',
      type: 'activity',
      content: "⚠️ [WARNING] Rate limit reached for X API. Pausing for 60 seconds before retrying. This is normal.\n🧠 [ANALYZING] Applying Natural Language Processing (NLP) to 50,000 comments from TikTok & Instagram...",
      timestamp: '12:20 PM'
    },
    {
      id: '9',
      type: 'activity',
      content: "📊 [GENERATING] Initial visualizations for the TikTok and Instagram tabs are now available on the left.\n✅ [QUERYING] Successfully resumed data collection from X.",
      timestamp: '12:22 PM'
    },
    {
      id: '10',
      type: 'ai',
      content: "Analysis complete! Your Insights Dashboard on the left is fully populated. The 'Overview' tab has the cross-platform summary, and you can dive into each platform for specific details. Let me know if you'd like me to refine this search or start a new one.",
      timestamp: '12:25 PM'
    }
  ]);

  const [inputValue, setInputValue] = useState("");
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        type: 'user',
        content: inputValue,
        timestamp: new Date().toLocaleTimeString('en-US', { 
          hour: 'numeric', 
          minute: '2-digit', 
          hour12: true 
        })
      };
      setMessages([...messages, newMessage]);
      setInputValue("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="h-full bg-background flex flex-col">
      {/* Header */}
      <div className="border-b border-card-border bg-panel-header px-4 py-3">
        <h2 className="text-lg font-semibold text-foreground">Command & Activity Stream</h2>
      </div>

      {/* Platform Selector */}
      <div className="p-4">
        <PlatformSelector 
          platforms={selectedPlatforms} 
          onTogglePlatform={onTogglePlatform} 
        />
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className="flex flex-col">
              {message.type === 'user' && (
                <div className="flex justify-end">
                  <div className="max-w-[80%]">
                    <div className="bg-primary text-primary-foreground rounded-lg px-3 py-2 text-sm">
                      {message.content}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1 text-right">
                      You {message.timestamp}
                    </div>
                  </div>
                </div>
              )}

              {message.type === 'ai' && (
                <div className="flex justify-start">
                  <div className="max-w-[80%]">
                    <div className="bg-card border border-card-border rounded-lg px-3 py-2 text-sm">
                      <div className="whitespace-pre-wrap">{message.content}</div>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      SocialPulse AI {message.timestamp}
                    </div>
                  </div>
                </div>
              )}

              {message.type === 'activity' && (
                <div className="my-2">
                  <Card className="bg-activity-block border-l-4 border-l-primary">
                    <div className="px-3 py-2">
                      <div className="text-xs font-mono text-muted-foreground mb-1">
                        AGENT ACTIVITY BLOCK {message.timestamp}
                      </div>
                      <div className="text-sm whitespace-pre-wrap font-mono">
                        {message.content}
                      </div>
                    </div>
                  </Card>
                </div>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Input */}
      <div className="border-t border-card-border p-4">
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your command or question..."
            className="flex-1"
          />
          <Button onClick={handleSendMessage} size="sm" className="px-3">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};