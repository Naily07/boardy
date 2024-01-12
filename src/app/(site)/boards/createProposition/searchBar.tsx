'use client'

import { useSearchParams } from "next/navigation"

export default function ParamsDemande(){
    const params = useSearchParams()
    const demande = params.get("demande")
    return demande
}