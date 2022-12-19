import { useCallback, useMemo, useState } from 'react';
import { IAccessCode } from '../../modules/entities/meditation/IAccessCode';

export const useAvailability = (model: { accessCodes: IAccessCode[] }, accessCode: string[] | null, id: number) => {
    const [code, setCode] = useState('');

    const isAvailable = useMemo(() => {
        if (model.accessCodes && !!accessCode?.length) {
            const match = model.accessCodes.find(item => item.meditationId === id && accessCode.includes(item.accessCode));
            return !!match;
        } else {
            return !accessCode?.length;
        }
    }, [accessCode, id, model.accessCodes]);

    const onGetAccess = useCallback(() => {
        if (accessCode?.includes(code)) {
            model.accessCodes = [
                ...model.accessCodes,
                { meditationId: id, accessCode: code }
            ];
            setCode('');
            return true;
        } else {
            setCode('');
            return false;
        }
    }, [accessCode, code]);

    return { code, setCode, isAvailable, onGetAccess };
};
