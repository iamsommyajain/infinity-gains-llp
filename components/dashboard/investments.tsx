import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function Investments() {
  const investments = [
    {
      name: "Growth Fund",
      type: "Equity",
      value: "$12,450.32",
      units: "423.5",
      returns: "+15.4%",
    },
    {
      name: "Balanced Fund",
      type: "Hybrid",
      value: "$8,230.45",
      units: "312.8",
      returns: "+8.2%",
    },
    {
      name: "Income Fund",
      type: "Debt",
      value: "$5,120.75",
      units: "210.3",
      returns: "+4.5%",
    },
    {
      name: "Blue Chip Fund",
      type: "Equity",
      value: "$9,850.20",
      units: "180.6",
      returns: "+12.8%",
    },
  ]

  return (
    <div className="grid gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Your Investments</CardTitle>
          <CardDescription>Overview of your mutual fund portfolio</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Fund Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Units</TableHead>
                <TableHead>Current Value</TableHead>
                <TableHead>Returns</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {investments.map((investment) => (
                <TableRow key={investment.name}>
                  <TableCell className="font-medium">{investment.name}</TableCell>
                  <TableCell>{investment.type}</TableCell>
                  <TableCell>{investment.units}</TableCell>
                  <TableCell>{investment.value}</TableCell>
                  <TableCell className="text-green-500">{investment.returns}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Investment Growth</CardTitle>
            <CardDescription>Performance over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full bg-muted/50 rounded-md flex items-center justify-center">
              <p className="text-muted-foreground">Growth Chart</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recommended Funds</CardTitle>
            <CardDescription>Based on your investment profile</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Technology Fund", type: "Sector", risk: "High", returns: "18-22%" },
                { name: "Government Securities", type: "Debt", risk: "Low", returns: "6-8%" },
                { name: "Mid-Cap Opportunities", type: "Equity", risk: "Medium", returns: "12-16%" },
              ].map((fund) => (
                <div key={fund.name} className="flex flex-col space-y-1 rounded-lg border p-4">
                  <h4 className="font-semibold">{fund.name}</h4>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Type: {fund.type}</span>
                    <span className="text-muted-foreground">Risk: {fund.risk}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">Expected Returns: {fund.returns}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

