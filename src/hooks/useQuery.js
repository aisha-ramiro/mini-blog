import { useLocation } from "react-router-dom";
import React from 'react';

import { useMemo } from "react";

export function useQuery (){
  const { search } = useLocation()
  return useMemo(() => new URLSearchParams(search), [search])
}