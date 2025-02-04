import ZoneId from '../../../../../resources/zone_id';
import { RaidbossData } from '../../../../../types/data';
import { TriggerSet } from '../../../../../types/trigger';

export type Data = RaidbossData;

const triggerSet: TriggerSet<Data> = {
  id: 'TheVoidcastDais',
  zoneId: ZoneId.TheVoidcastDais,
  timelineFile: 'golbez.txt',
  triggers: [],
};

export default triggerSet;
