const cds = require('@sap/cds');

class IncidentService extends cds.ApplicationService {
    async init() {
        const { Incidents } = this.entities;
        this.before('CREATE','IncidentPhotos', async req => {
            console.log("CREATE Operation");
            console.log(req.headers);
            console.log(req.data);
        })
        this.before('UPDATE','IncidentPhotos', async req => {
            console.log("UPDATE Operation");
            console.log(req.headers);
            console.log(req.data);
        })
        await super.init()
    }
}

module.exports = { IncidentService }