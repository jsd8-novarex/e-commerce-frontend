interface CollectionsFilterBarProps {
  setSortOrder: React.Dispatch<React.SetStateAction<string>>;
}

function CollectionsFilterBar({ setSortOrder }: CollectionsFilterBarProps) {
  return (
    <section className="sticky top-[5rem] z-[2] col-span-full flex items-center justify-end bg-white/90 py-2 lg:top-[4.5rem] 2xl:top-[4.75rem]">
      <div>        
        <select          
          onChange={(e) => setSortOrder(e.target.value)}
          className="px-4 py-2 border rounded"
        >
          <option value="">Select</option>
          <option value="A-Z">Sort by: A-Z</option>
          <option value="Z-A">Sort by: Z-A</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
        </select>
      </div>
    </section>
  );
}

export default CollectionsFilterBar;
