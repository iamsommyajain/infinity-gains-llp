import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function Insurance() {
  const policies = [
    {
      name: "Term Life Insurance",
      number: "LI-12345678",
      coverage: "$300,000",
      premium: "$120/month",
      status: "Active",
      nextPayment: "Apr 15, 2023",
    },
    {
      name: "Health Insurance",
      number: "HI-87654321",
      coverage: "$100,000",
      premium: "$80/month",
      status: "Active",
      nextPayment: "May 1, 2023",
    },
    {
      name: "Auto Insurance",
      number: "AI-45678912",
      coverage: "$50,000",
      premium: "$50/month",
      status: "Active",
      nextPayment: "Apr 22, 2023",
    },
  ]

  return (
    <div className="grid gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Your Insurance Policies</CardTitle>
          <CardDescription>Overview of your active insurance coverage</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Policy Name</TableHead>
                <TableHead>Policy Number</TableHead>
                <TableHead>Coverage</TableHead>
                <TableHead>Premium</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Next Payment</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {policies.map((policy) => (
                <TableRow key={policy.number}>
                  <TableCell className="font-medium">{policy.name}</TableCell>
                  <TableCell>{policy.number}</TableCell>
                  <TableCell>{policy.coverage}</TableCell>
                  <TableCell>{policy.premium}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      {policy.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{policy.nextPayment}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Coverage Summary</CardTitle>
            <CardDescription>Total insurance protection</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full bg-muted/50 rounded-md flex items-center justify-center">
              <p className="text-muted-foreground">Coverage Chart</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recommended Coverage</CardTitle>
            <CardDescription>Based on your profile and needs</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Critical Illness Cover", coverage: "$50,000", premium: "$35/month" },
                { name: "Home Insurance", coverage: "$200,000", premium: "$45/month" },
                { name: "Travel Insurance", coverage: "$25,000", premium: "$15/month" },
              ].map((recommendation) => (
                <div key={recommendation.name} className="flex flex-col space-y-1 rounded-lg border p-4">
                  <h4 className="font-semibold">{recommendation.name}</h4>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Coverage: {recommendation.coverage}</span>
                    <span className="text-muted-foreground">Premium: {recommendation.premium}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

