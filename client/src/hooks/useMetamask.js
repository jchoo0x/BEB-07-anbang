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
      const networks = await window.ethereum.request({ method: "eth_chainId" });
      const KlaytnBaobabChainId = "0x3e9";
      if (networks === KlaytnBaobabChainId) {
        console.log("correct");
      } else {
        console.error("wrong");
      }
      // Switch to the Klaytn Baobab network
      try {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: KlaytnBaobabChainId }],
        });
      } catch (err) {
        if ((err.code = 4902)) {
          console.error("this network is not found in your network");
        } else {
          console.error("failed to switch this network");
        }
      }
      // const isKlaytnAdded = networks.find((network) => network.chainId === "0x39");
      // If the Klaytn network is not added, add it to Metamask

      const klaytnBaobabMetaData = {
        chainId: "0x3e9",
        chainName: "Klaytn Baobab Network",
        rpcUrls: ["https://api.baobab.klaytn.net:8651"],
        blockExplorerUrls: ["https://baobab.scope.klaytn.com"],
        nativeCurrency: {
          name: "Klaytn",
          decimals: 18,
          symbol: "KLAY",
        },
      };

      try {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [klaytnBaobabMetaData],
        });
      } catch (err) {
        console.error(err.message);
      }

      // Set the Metamask object
      setMetamask(window.ethereum);
    })();
  }, []);

  return metamask;
};

export default useMetamask;
