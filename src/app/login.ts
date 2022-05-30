// presne takýto objekt posiela BE - názov triedy/interface-u nie je dôležitý, ale
// názvy atribútov sa musia zhodovať s tým čo ide z BE (employer ide z BE, tak musí byť aj tu employer)
export interface LoginResponse {
  employer: boolean
}
