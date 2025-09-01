import { useState } from "react";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { InsightsDashboard } from "./InsightsDashboard";
import { CommandActivityStream } from "./CommandActivityStream";
import { Music, Camera, Users, MessageCircle } from "lucide-react";

interface Platform {
  id: string;
  name: string;
  icon: any;
  isActive: boolean;
}

export const WorkspaceLayout = () => {
  const [platforms, setPlatforms] = useState<Platform[]>([
    { id: 'tiktok', name: 'TikTok', icon: Music, isActive: true },
    { id: 'instagram', name: 'Instagram', icon: Camera, isActive: true },
    { id: 'facebook', name: 'Facebook', icon: Users, isActive: false },
    { id: 'x', name: 'X', icon: MessageCircle, isActive: false },
  ]);

  const handleTogglePlatform = (platformId: string) => {
    setPlatforms(prev => 
      prev.map(platform => 
        platform.id === platformId 
          ? { ...platform, isActive: !platform.isActive }
          : platform
      )
    );
  };
  return (
    <div className="h-screen bg-background">
      <ResizablePanelGroup direction="horizontal" className="h-full">
        <ResizablePanel defaultSize={65} minSize={50}>
          <InsightsDashboard selectedPlatforms={platforms} />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={35} minSize={30}>
          <CommandActivityStream 
            selectedPlatforms={platforms}
            onTogglePlatform={handleTogglePlatform}
          />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};