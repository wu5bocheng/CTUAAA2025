export type ContentType = "text" | "video" | "highlights" | "notice" | "image";

export interface BaseContent {
  type: ContentType;
  title?: string;
}

export interface TextContent extends BaseContent {
  type: "text";
  content: string;
}

export interface VideoContent extends BaseContent {
  type: "video";
  videoId: string;
}

export interface HighlightsContent extends BaseContent {
  type: "highlights";
  items: string[];
}

export interface NoticeContent extends BaseContent {
  type: "notice";
  content: string;
}

export interface ImageContent extends BaseContent {
  type: "image";
  image: string;
  alt: string;
}

export interface TabContent extends BaseContent {
  priority?: boolean;
}

export interface TabImageContent extends TabContent {
  type: "image";
  image: string;
  alt: string;
}

export interface TabVideoContent extends TabContent {
  type: "video";
  videoId: string;
  title: string;
}

export type TabItem = {
  id: string;
  label: string;
  content: TabImageContent | TabVideoContent;
};

export type Content = TextContent | VideoContent | HighlightsContent | NoticeContent | ImageContent;
