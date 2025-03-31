import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Overview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Portfolio Performance</CardTitle>
          <CardDescription>Your investment performance over time</CardDescription>
        </CardHeader>
        <CardContent className="pl-2">
          <div className="h-[300px] w-full bg-muted/50 rounded-md flex items-center justify-center">
            <p className="text-muted-foreground">Portfolio Chart</p>
          </div>
        </CardContent>
      </Card>
      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>Asset Allocation</CardTitle>
          <CardDescription>Your current asset distribution</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full bg-muted/50 rounded-md flex items-center justify-center">
            <p className="text-muted-foreground">Allocation Chart</p>
          </div>
        </CardContent>
      </Card>
      <Card className="col-span-7">
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Your recent financial activities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center">
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {i === 1 ? "Mutual Fund Purchase" : i === 2 ? "Insurance Premium" : "Dividend Received"}
                  </p>
                  <p className="text-sm text-muted-foreground">{new Date().toLocaleDateString()}</p>
                </div>
                <div className="ml-auto font-medium">{i === 1 ? "-$1,000.00" : i === 2 ? "-$250.00" : "+$75.50"}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

