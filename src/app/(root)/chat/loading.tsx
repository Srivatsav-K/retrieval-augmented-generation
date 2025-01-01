const Loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex items-center justify-center space-x-2">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-t-4 border-solid border-primary"></div>
        <p className="text-primary">Loading...</p>
      </div>
    </div>
  );
};
export default Loading;
