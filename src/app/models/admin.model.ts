import { IconStyle } from "@fortawesome/fontawesome-svg-core";

export interface Admin {
    experiences: {
      title: string;
      company: string;
      location: string;
      startDate: Date;
      endDate: Date;
      description: string;
    };
    educations: {
      school:string
      startDate:Date;
      endDate:Date;
      description:string
    };
    skills:{
      label:string;
      title:string;
      logo:IconStyle
    }
    hobbies: {
        title:string;
        logo:IconStyle;
        description:string
        dates:Date;
    };
    footers:{
      link:string;
      logo:IconStyle;
    };
    accueils: {
      name: string;
      title: string;
      objective: string;
      recommendations: Recommendation[];
  }
  }
  interface Recommendation {
    author: string;
    position: string;
    text: string;
}