export function ProductRow({ product }) {

  const style = product.stocked ? undefined : { color: "red" };

  return (
    <tr className="border-2">
      <td className=" p-2" style={style}>{product.name}</td>
      <td className="text-center p-2">{product.price}</td>
      {product.stocked?<td></td>:<td className="text-center p-2" style={style}>unavailable</td>}
    </tr>
  );
}
export default ProductRow;
