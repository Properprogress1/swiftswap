'use client'
import { Button } from "./ui/button"
import { ConnectButton } from '@rainbow-me/rainbowkit';
const CustomConnectButton = ({ title, onClick }: { title: string, onClick: () => void }) => {
    return (
        <Button onClick={onClick} className='flex p-[10px] items-center justify-center h-[48px] w-[280px]  rounded-[8px] hover:bg-slate-300  bg-white'>

            <p className='text-black font-normal text-base'>{title}</p>

        </Button>
    )
}

export const ConnectToWalletButton = () => {
    return (
        <ConnectButton.Custom>
            {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                authenticationStatus,
                mounted,
            }) => {
                // Note: If your app doesn't use authentication, you
                // can remove all 'authenticationStatus' checks
                const ready = mounted && authenticationStatus !== 'loading';
                const connected =
                    ready &&
                    account &&
                    chain &&
                    (!authenticationStatus ||
                        authenticationStatus === 'authenticated');
                return (
                    <div
                        {...(!ready && {
                            'aria-hidden': true,
                            'style': {
                                opacity: 0,
                                pointerEvents: 'none',
                                userSelect: 'none',
                            },
                        })}
                    >
                        {(() => {
                            if (!connected) {
                                return (
                                    <Button onClick={openConnectModal} className='flex p-[10px] items-center justify-center h-[48px] w-[280px]  rounded-[8px] hover:bg-slate-300  bg-white'>

                                        <p className='text-black font-normal text-base'> Connect To Wallet</p>

                                    </Button>
                                );
                            }
                            if (chain.unsupported) {
                                return (
                                    <Button onClick={openChainModal} className='flex p-[10px] items-center justify-center h-[48px] w-[280px]  rounded-[8px] hover:bg-slate-300  bg-white'>

                                        <p className='text-black font-normal text-base'> Wrong network</p>

                                    </Button>
                                );
                            }
                            return (
                                <div className="flex p-[10px] items-center h-[48px] w-[280px] gap-[10px] rounded-[8px] border-[1px] bg-transparent border-white" style={{ display: 'flex', gap: 12 }}>
                                    <button

                                        onClick={openChainModal}
                                        style={{ display: 'flex', alignItems: 'center' }}
                                        type="button"
                                    >
                                        {chain.hasIcon && (
                                            <div
                                                style={{
                                                    color: '#FFFFFF',
                                                    background: chain.iconBackground,
                                                    width: 12,
                                                    height: 12,
                                                    borderRadius: 999,
                                                    overflow: 'hidden',
                                                    marginRight: 4,
                                                }}
                                            >
                                                {chain.iconUrl && (
                                                    <img
                                                        alt={chain.name ?? 'Chain icon'}
                                                        src={chain.iconUrl}
                                                        style={{ width: 12, height: 12 }}
                                                    />
                                                )}
                                            </div>
                                        )}
                                        {chain.name}
                                    </button>
                                    <button className="text-white" onClick={openAccountModal} type="button">
                                        {account.displayName}
                                        {account.displayBalance
                                            ? ` (${account.displayBalance})`
                                            : ''}
                                    </button>
                                </div>
                            );
                        })()}
                    </div>
                );
            }}
        </ConnectButton.Custom>
    );
};
export default ConnectToWalletButton