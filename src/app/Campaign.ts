export interface Campaign {
  company: string;
  id?: number;
  owner: number;
  name: string;
  adtitle: string;
  adtext: string;
  adtarget: string;
  adarea: string;
  adbudget: number;
  adstart: Date;
  adend: Date;
  mediainfo: string;
  adurl: string;
  adother: string;
  adstatus: string;
}
