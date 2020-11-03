interface StepList {
    name: string;
    content: string;
    href?: string;
    className?: string;
    disabled?:boolean;
    icon?:any;
    iconClass?:string
  }
  
  interface BaseStepProps {
    list: StepList[];
    current?: number;
    className?: string;
    small?: boolean;
  
  }