'use client'

import React from 'react'
import Image from 'next/image'
import Button from './Button'

type CardProps = {
  name: string
  image: string
  desc: string
  tag?: string
}

const ServiceCard = ({ name, image, desc, tag }: CardProps) => {
  return (
    <div className="group relative flex flex-col max-w-sm rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-xl transition-shadow p-4">
      
      {/* Tag */}
      {tag && (
        <span className="absolute z-1 top-2 right-2 bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">
          {tag}
        </span>
      )}

      {/* Image */}
      <div className="w-full overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={`${name}-service`}
          height={200}
          width={400}
          className="object-cover w-full h-[200px] transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 mt-4">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600 text-sm">{desc}</p>
      </div>

      {/* CTA */}
      <div className="mt-4">
        <Button
          variant="primary"
          label="Know More"
          onClick={(() => alert(`Interested in ${name}`))}
        />
      </div>
    </div>
  )
}

export default ServiceCard

