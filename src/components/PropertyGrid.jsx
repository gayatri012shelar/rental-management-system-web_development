/* src/components/PropertyGrid.jsx */
import PropertyCard from "./PropertyCard";


export default function PropertyGrid({ properties, onSelect }) {
return (
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
  {properties.map((p) => (
    <PropertyCard key={p.id} property={p} onClick={() => onSelect(p)} />
  ))}
</div>

);
}
