
export function Table({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm">
      <table className="w-full text-sm">
        {children}
      </table>
    </div>
  )
}