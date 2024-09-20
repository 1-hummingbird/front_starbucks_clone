import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelcetButton() {
  return (
    <div className="my-3 flex justify-end px-3">
      <Select>
        <SelectTrigger className="w-1/2">
          <SelectValue placeholder="신상품순" />
        </SelectTrigger>
        <SelectContent className="text-lg">
          <SelectGroup>
            <SelectItem value="best">추천순</SelectItem>
            <SelectItem value="new">신상품순</SelectItem>
            <SelectItem value="low-price">낮은가격순</SelectItem>
            <SelectItem value="high-price">높은가격순</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
