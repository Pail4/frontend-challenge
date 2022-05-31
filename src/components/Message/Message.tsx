import "./Message.css";
import React from "react";

interface MessageProps {
  children: React.ReactNode;
}

export function Message({ children }: MessageProps) {
  return <div className="Message">{children}</div>;
}
