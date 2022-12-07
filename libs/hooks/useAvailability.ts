import { useCallback, useMemo, useState } from 'react';
import { IAccessCode } from '../../modules/entities/meditation/IAccessCode';

export const useAvailability = (model: { accessCodes: IAccessCode[] }, accessCode: string[], id: number) => {
    const [code, setCode] = useState('');

    const isAvailable = useMemo(() => {
        if (model.accessCodes && !!accessCode?.length) {
            console.log('accessCode 1');
            const match = model.accessCodes.find(item => item.meditationId === id && accessCode.includes(item.accessCode));
            return !!match;
        } else {
            console.log('accessCode 2');
            return !accessCode?.length;
        }
    }, [accessCode, id, model.accessCodes]);

    const onGetAccess = useCallback(() => {
        if (accessCode.includes(code)) {            
            model.accessCodes = [
                ...model.accessCodes,
                { meditationId: id, accessCode: code }
            ];
            
            // console.log(model.accessCodes );
            setCode('');
            return true;
        } else {
            setCode('');
            return false;
        }
    }, [accessCode, code]);

    return { code, setCode, isAvailable, onGetAccess };
};
