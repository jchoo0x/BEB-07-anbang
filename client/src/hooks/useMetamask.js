import { useState, useEffect } from "react";

const useMetamask = () => {
    const [metamask, setMetamask] = useState(null);

    useEffect(() => {
        (async () => {
            if (typeof window.ethereum === "undefined") {
                alert("지갑이 설치되어있지 않습니다.");
                return;
            }

            if (window.ethereum.isMetaMask === false) {
                alert("메타마스크만 지원합니다.");
                return;
            }

            // Check if the Klaytn network is already set as the default network in Metamask
            const currentChainId = await window.ethereum.request({ method: "eth_chainId" });
            if (currentChainId !== "0x39") {
                await window.ethereum.request({
                    method: "eth_chainId",
                    params: ["0x39"],
                });
            }

            setMetamask(window.ethereum);
        })();
    }, []);

    return metamask;
};
    
    export default useMetamask;
    