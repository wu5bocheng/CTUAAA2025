import Image from "next/image";

interface BaseContent {
  type: "video" | "image" | "highlights" | "text" | "notice" | "html";
  title?: string;
  priority?: boolean;
}

interface VideoContent extends BaseContent {
  type: "video";
  videoId: string;
}

interface ImageContent extends BaseContent {
  type: "image";
  image: string;
  alt: string;
}

interface HighlightsContent extends BaseContent {
  type: "highlights";
  items: string[];
  content?: string;
}

interface TextContent extends BaseContent {
  type: "text";
  content: string;
}

interface NoticeContent extends BaseContent {
  type: "notice";
  content: string;
}

interface HtmlContent extends BaseContent {
  type: "html";
  content: string;
}

type Content = VideoContent | ImageContent | HighlightsContent | TextContent | NoticeContent | HtmlContent;

interface ContentRendererProps {
  content: Content;
  className?: string;
}

export default function ContentRenderer({ content, className = "" }: ContentRendererProps) {
  const renderYouTubeVideo = (videoId: string) => {
    return (
      <div className="relative w-full max-w-3xl mx-auto aspect-video">
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
          src={`https://www.youtube.com/embed/${videoId}?rel=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  };

  switch (content.type) {
    case "video":
      return (
        <div className={`w-full py-6 px-6 ${className}`}>
          {content.title && <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">{content.title}</h3>}
          <div className="relative w-full max-w-4xl mx-auto aspect-video">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              src={`https://www.youtube.com/embed/${content.videoId}?rel=0`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      );

    case "image":
      return (
        <div className={`relative w-full max-w-2xl mx-auto ${className}`}>
          <Image
            src={content.image}
            alt={content.alt || ""}
            width={800}
            height={1200}
            className="w-full h-auto object-contain mx-auto"
            priority={content.priority}
          />
        </div>
      );

    case "highlights":
      return (
        <div className={`max-w-2xl mx-auto ${className}`}>
          <h3 className="text-3xl font-bold mb-8 text-center text-gray-900">{content.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.items.map((item: string, index: number) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow
                  border border-gray-100"
              >
                <p className="text-lg text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          {content.content && <div className="prose prose-lg prose-gray mx-auto" dangerouslySetInnerHTML={{ __html: content.content }} />}
        </div>
      );

    case "text":
      return (
        <div className={`max-w-3xl mx-auto ${className}`}>
          {content.title && <h3 className="text-3xl font-bold mb-6 text-gray-900">{content.title}</h3>}
          <p className="text-xl leading-relaxed text-gray-700 font-light">{content.content}</p>
        </div>
      );

    case "notice":
      return (
        <div className={`text-center py-12 ${className}`}>
          <p className="text-lg text-gray-600 italic">{content.content}</p>
        </div>
      );

    case "html":
      return (
        <div className={`max-w-4xl mx-auto ${className}`}>
          {content.title && <h3 className="text-3xl font-bold mb-6 text-gray-900">{content.title}</h3>}
          <div className="prose prose-lg prose-gray mx-auto" dangerouslySetInnerHTML={{ __html: content.content }} />
        </div>
      );

    default:
      return (
        <div className={`text-center py-12 ${className}`}>
          <p className="text-gray-600">内容更新中...</p>
        </div>
      );
  }
}
