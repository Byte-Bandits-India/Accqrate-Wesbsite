'use client'

import React from 'react'
import { use } from 'react'
import ComingSoon from '@/components/CommingSoon'
import { notFound } from 'next/navigation'
import { comingSoonRoutes } from '@/lib/ComingSoonRoutes'

export default function CatchAllPage({
    params,
}: {
    params: Promise<{ slug?: string[] }>
}) {
    const resolvedParams = use(params)
    const slugArray = resolvedParams.slug || []
    const path = slugArray.join('/')

    if (comingSoonRoutes.includes(path)) {
        return <ComingSoon />
    }

    notFound()
}
