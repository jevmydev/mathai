interface MessageProps {
    content: string;
    imageUrl: string;
}

export const Message = ({ content, imageUrl }: MessageProps) => {
    const splittedContent = content.split("`");

    return (
        <div className="flex flex-col gap-4 p-2 bg-neutral-900 rounded-xl backdrop-blur-3xl">
            <img className="w-10 h-10 object-cover rounded" src={imageUrl} alt="MathAI logo" />
            <p className="flex flex-col gap-4">
                {splittedContent.map((value, index) => {
                    const isOddIndex = index % 2 === 1;
                    return isOddIndex ? (
                        <span className="bg-fuchsia-800 rounded p-2" key={value}>
                            {value}
                        </span>
                    ) : (
                        value
                    );
                })}
            </p>
        </div>
    );
};

export default Message;
