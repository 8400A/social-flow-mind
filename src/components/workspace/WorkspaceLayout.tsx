import { useState } from "react";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { InsightsDashboard } from "./InsightsDashboard";
import { CommandActivityStream } from "./CommandActivityStream";

export const WorkspaceLayout = () => {
  return (
    <div className="h-screen bg-background">
      <ResizablePanelGroup direction="horizontal" className="h-full">
        <ResizablePanel defaultSize={65} minSize={50} maxSize={80}>
          <InsightsDashboard />
        </ResizablePanel>
        
        <ResizableHandle className="w-1 bg-panel-border hover:bg-primary/20 transition-colors" />
        
        <ResizablePanel defaultSize={35} minSize={20} maxSize={50}>
          <CommandActivityStream />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};