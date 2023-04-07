export const Loading = () => {
    return (
        <div className="flex flex-col gap-4 animate-pulse">
            <div className="flex w-full">
                <div className="bg-zinc-900 w-full h-36 rounded"></div>
            </div>
            <div className="flex w-full">
                <div className="bg-zinc-900 w-full h-36 rounded"></div>
            </div>
        </div>
    );
};

export default Loading;
