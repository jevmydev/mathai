import { type ResolveMessage } from "../types";
import Message from "../elements/Message";

interface PlayGroundProps {
    resolve: ResolveMessage;
}

const PlayGround = ({ resolve }: PlayGroundProps) => {
    const { content, role } = resolve;
    const imageUrl = role === "assistant" ? "/favicon.webp" : "/favicon.webp";

    return (
        <div className="relative overflow-auto flex flex-col gap-4 pr-4">
            <Message content={content} imageUrl={imageUrl} />
        </div>
    );
};

export default PlayGround;
