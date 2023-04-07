interface MessageProps {
    content: string;
    imageUrl: string;
}

export const Message = ({ content, imageUrl }: MessageProps) => {
    return (
        <div className="flex flex-col gap-4 p-2 bg-neutral-900 rounded-xl backdrop-blur-3xl">
            <img className="w-10 h-10 object-cover rounded" src={imageUrl} alt={content} />
            <p>{content}</p>
        </div>
    );
};

export default Message;
