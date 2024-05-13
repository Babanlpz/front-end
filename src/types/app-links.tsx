export interface AppLinks {
  label: string;
  baseUrl: string;
  type: string; // @TODO refactor this
}

export interface FooterLinks {
  label: string;
  links: AppLinks[];
}
