export const FILTER_BY_NAME = 'FILTER_BY_NAME'
export const FILTER_BY_EMAIL = 'FILTER_BY_EMAIL'
export const FILTER_BY_PHONE = 'FILTER_BY_PHONE'
export const FILTER_BY_ID = 'FILTER_BY_ID'
export const FILTER_BY_DATE_JOINED = 'FILTER_BY_DATE_JOINED'
export const FILTER_BY_EXTRA_SECURITY_STATUS = 'FILTER_BY_EXTRA_SECURITY_STATUS'
export const FILTER_BY_BUSINESS_STATUS = 'FILTER_BY_BUSINESS_STATUS'
export const FILTER_BY_PERMISSION_TYPE = 'FILTER_BY_PERMISSION_TYPE'

export function filterByName(){
  return{
    type: FILTER_BY_NAME
  }
}

export function filterByEmail(){
  return{
    type: FILTER_BY_EMAIL
  }
}

export function filterByPhone(){
  return{
    type: FILTER_BY_PHONE
  }
}

export function filterById(){
  return{
    type: FILTER_BY_ID
  }
}

export function filterByDateJoined(){
  return{
    type: FILTER_BY_DATE_JOINED
  }
}

export function filterByExtraSecurityStatus(){
  return{
    type: FILTER_BY_EXTRA_SECURITY_STATUS
  }
}

export function filterByBusinessStatus(){
  return{
    type: FILTER_BY_BUSINESS_STATUS
  }
}

export function filterByPermissionType(){
  return{
    type: FILTER_BY_PERMISSION_TYPE
  }
}
