export function Stats() {
  const stats = [
    { value: "10M+", label: "Links shortened" },
    { value: "99.9%", label: "Uptime guarantee" },
    { value: "50K+", label: "Active users" },
    { value: "<100ms", label: "Redirect speed" },
  ]

  return (
    <section className="border-y border-border bg-secondary/30 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary sm:text-5xl">{stat.value}</div>
              <div className="text-sm text-muted-foreground sm:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
