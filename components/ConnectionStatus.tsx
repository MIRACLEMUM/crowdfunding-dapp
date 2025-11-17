
interface ConnectionStatusProps {
  walletAddress?: string;
}

const ConnectionStatus = ({ walletAddress }: ConnectionStatusProps) => {
  const isConnected = Boolean(walletAddress);

  const formattedAddress = isConnected
    ? `${walletAddress!.substring(0, 6)}...${walletAddress!.slice(-4)}`
    : "";

  return (
    <div className="bg-[#424258] px-2 py-1 rounded-md">
      {isConnected
        ? `Connected: ${formattedAddress}`
        : "Not connected"}
    </div>
  );
};

export default ConnectionStatus;
