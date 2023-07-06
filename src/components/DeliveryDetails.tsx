type Props = { title: string, deliverys: string[] }
const DeliveryDetails = (props: Props) => (
    <div className="text-sm grid gap-2">
        <p className="font-semibold ">{props.title}</p>
        <ul className="list-disc px-8">
            {
                props.deliverys.map((delivery) => (
                    <li>
                        {delivery}
                    </li>
                ))
            }
        </ul>
    </div>
)

export default DeliveryDetails;