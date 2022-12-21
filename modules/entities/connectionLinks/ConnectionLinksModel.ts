import { MobXRepository } from "../../../src/repository/MobXRepository";

export interface IConnectionLinksModel {
    links: { [key: string]: string };
}

class ConnectionLinksModel implements IConnectionLinksModel {
    private linksRepository = new MobXRepository<{ [key: string]: string }>({});

    get links() {
        return this.linksRepository.data || {};
    }

    set links(data: { [key: string]: string }) {
        this.linksRepository.save(data);
    }

};

export const connectionLinksModel = new ConnectionLinksModel();
