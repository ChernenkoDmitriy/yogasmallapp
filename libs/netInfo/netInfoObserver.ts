import NetInfo from "@react-native-community/netinfo";

export interface INetInfoObserver {
    subscribeNetInfo: (callback: (value: boolean) => void) => void;
    unsubscribe: () => void;
};

class NetInfoObserver implements INetInfoObserver {
    private _unsubscribe: () => void = () => { };

    subscribeNetInfo = (callback: (value: boolean) => void) => {
        this._unsubscribe = NetInfo.addEventListener(state => {
            callback(!!state.isConnected);
        });
    }

    unsubscribe = () => {
        this._unsubscribe();
    };
};

export const netInfoObserver = new NetInfoObserver();
