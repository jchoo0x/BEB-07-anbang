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

      // Check if the Klaytn network is already added to Metamask
      const networks = await window.ethereum.request({
        method: "wallet_getEthereumNetworks",
      });
      const isKlaytnAdded = networks.find(
        (network) => network.chainId === "0x3E9"
      );

      // If the Klaytn network is not added, add it to Metamask
      if (!isKlaytnAdded) {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: "0x3E9",
              name: "Klaytn",
              rpcUrl: "https://baobab.klaytn.net:8651",
            },
          ],
        });
      }

      // Switch to the Klaytn Baobab network
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x3E9" }],
      });

      // Set the Metamask object
      setMetamask(window.ethereum);
    })();
  }, []);

  return metamask;
};

export default useMetamask;
