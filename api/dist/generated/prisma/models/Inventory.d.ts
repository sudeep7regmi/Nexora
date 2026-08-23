import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type InventoryModel = runtime.Types.Result.DefaultSelection<Prisma.$InventoryPayload>;
export type AggregateInventory = {
    _count: InventoryCountAggregateOutputType | null;
    _avg: InventoryAvgAggregateOutputType | null;
    _sum: InventorySumAggregateOutputType | null;
    _min: InventoryMinAggregateOutputType | null;
    _max: InventoryMaxAggregateOutputType | null;
};
export type InventoryAvgAggregateOutputType = {
    quantity: number | null;
    reserved: number | null;
};
export type InventorySumAggregateOutputType = {
    quantity: number | null;
    reserved: number | null;
};
export type InventoryMinAggregateOutputType = {
    id: string | null;
    variantId: string | null;
    quantity: number | null;
    reserved: number | null;
    updatedAt: Date | null;
};
export type InventoryMaxAggregateOutputType = {
    id: string | null;
    variantId: string | null;
    quantity: number | null;
    reserved: number | null;
    updatedAt: Date | null;
};
export type InventoryCountAggregateOutputType = {
    id: number;
    variantId: number;
    quantity: number;
    reserved: number;
    updatedAt: number;
    _all: number;
};
export type InventoryAvgAggregateInputType = {
    quantity?: true;
    reserved?: true;
};
export type InventorySumAggregateInputType = {
    quantity?: true;
    reserved?: true;
};
export type InventoryMinAggregateInputType = {
    id?: true;
    variantId?: true;
    quantity?: true;
    reserved?: true;
    updatedAt?: true;
};
export type InventoryMaxAggregateInputType = {
    id?: true;
    variantId?: true;
    quantity?: true;
    reserved?: true;
    updatedAt?: true;
};
export type InventoryCountAggregateInputType = {
    id?: true;
    variantId?: true;
    quantity?: true;
    reserved?: true;
    updatedAt?: true;
    _all?: true;
};
export type InventoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InventoryWhereInput;
    orderBy?: Prisma.InventoryOrderByWithRelationInput | Prisma.InventoryOrderByWithRelationInput[];
    cursor?: Prisma.InventoryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | InventoryCountAggregateInputType;
    _avg?: InventoryAvgAggregateInputType;
    _sum?: InventorySumAggregateInputType;
    _min?: InventoryMinAggregateInputType;
    _max?: InventoryMaxAggregateInputType;
};
export type GetInventoryAggregateType<T extends InventoryAggregateArgs> = {
    [P in keyof T & keyof AggregateInventory]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInventory[P]> : Prisma.GetScalarType<T[P], AggregateInventory[P]>;
};
export type InventoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InventoryWhereInput;
    orderBy?: Prisma.InventoryOrderByWithAggregationInput | Prisma.InventoryOrderByWithAggregationInput[];
    by: Prisma.InventoryScalarFieldEnum[] | Prisma.InventoryScalarFieldEnum;
    having?: Prisma.InventoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InventoryCountAggregateInputType | true;
    _avg?: InventoryAvgAggregateInputType;
    _sum?: InventorySumAggregateInputType;
    _min?: InventoryMinAggregateInputType;
    _max?: InventoryMaxAggregateInputType;
};
export type InventoryGroupByOutputType = {
    id: string;
    variantId: string;
    quantity: number;
    reserved: number;
    updatedAt: Date;
    _count: InventoryCountAggregateOutputType | null;
    _avg: InventoryAvgAggregateOutputType | null;
    _sum: InventorySumAggregateOutputType | null;
    _min: InventoryMinAggregateOutputType | null;
    _max: InventoryMaxAggregateOutputType | null;
};
export type GetInventoryGroupByPayload<T extends InventoryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InventoryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InventoryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InventoryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InventoryGroupByOutputType[P]>;
}>>;
export type InventoryWhereInput = {
    AND?: Prisma.InventoryWhereInput | Prisma.InventoryWhereInput[];
    OR?: Prisma.InventoryWhereInput[];
    NOT?: Prisma.InventoryWhereInput | Prisma.InventoryWhereInput[];
    id?: Prisma.StringFilter<"Inventory"> | string;
    variantId?: Prisma.StringFilter<"Inventory"> | string;
    quantity?: Prisma.IntFilter<"Inventory"> | number;
    reserved?: Prisma.IntFilter<"Inventory"> | number;
    updatedAt?: Prisma.DateTimeFilter<"Inventory"> | Date | string;
    variant?: Prisma.XOR<Prisma.ProductVariantScalarRelationFilter, Prisma.ProductVariantWhereInput>;
};
export type InventoryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    variantId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    reserved?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    variant?: Prisma.ProductVariantOrderByWithRelationInput;
};
export type InventoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    variantId?: string;
    AND?: Prisma.InventoryWhereInput | Prisma.InventoryWhereInput[];
    OR?: Prisma.InventoryWhereInput[];
    NOT?: Prisma.InventoryWhereInput | Prisma.InventoryWhereInput[];
    quantity?: Prisma.IntFilter<"Inventory"> | number;
    reserved?: Prisma.IntFilter<"Inventory"> | number;
    updatedAt?: Prisma.DateTimeFilter<"Inventory"> | Date | string;
    variant?: Prisma.XOR<Prisma.ProductVariantScalarRelationFilter, Prisma.ProductVariantWhereInput>;
}, "id" | "variantId">;
export type InventoryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    variantId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    reserved?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.InventoryCountOrderByAggregateInput;
    _avg?: Prisma.InventoryAvgOrderByAggregateInput;
    _max?: Prisma.InventoryMaxOrderByAggregateInput;
    _min?: Prisma.InventoryMinOrderByAggregateInput;
    _sum?: Prisma.InventorySumOrderByAggregateInput;
};
export type InventoryScalarWhereWithAggregatesInput = {
    AND?: Prisma.InventoryScalarWhereWithAggregatesInput | Prisma.InventoryScalarWhereWithAggregatesInput[];
    OR?: Prisma.InventoryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InventoryScalarWhereWithAggregatesInput | Prisma.InventoryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Inventory"> | string;
    variantId?: Prisma.StringWithAggregatesFilter<"Inventory"> | string;
    quantity?: Prisma.IntWithAggregatesFilter<"Inventory"> | number;
    reserved?: Prisma.IntWithAggregatesFilter<"Inventory"> | number;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Inventory"> | Date | string;
};
export type InventoryCreateInput = {
    id?: string;
    quantity?: number;
    reserved?: number;
    updatedAt?: Date | string;
    variant: Prisma.ProductVariantCreateNestedOneWithoutInventoryInput;
};
export type InventoryUncheckedCreateInput = {
    id?: string;
    variantId: string;
    quantity?: number;
    reserved?: number;
    updatedAt?: Date | string;
};
export type InventoryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reserved?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    variant?: Prisma.ProductVariantUpdateOneRequiredWithoutInventoryNestedInput;
};
export type InventoryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    variantId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reserved?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InventoryCreateManyInput = {
    id?: string;
    variantId: string;
    quantity?: number;
    reserved?: number;
    updatedAt?: Date | string;
};
export type InventoryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reserved?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InventoryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    variantId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reserved?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InventoryNullableScalarRelationFilter = {
    is?: Prisma.InventoryWhereInput | null;
    isNot?: Prisma.InventoryWhereInput | null;
};
export type InventoryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    variantId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    reserved?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type InventoryAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    reserved?: Prisma.SortOrder;
};
export type InventoryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    variantId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    reserved?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type InventoryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    variantId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    reserved?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type InventorySumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    reserved?: Prisma.SortOrder;
};
export type InventoryCreateNestedOneWithoutVariantInput = {
    create?: Prisma.XOR<Prisma.InventoryCreateWithoutVariantInput, Prisma.InventoryUncheckedCreateWithoutVariantInput>;
    connectOrCreate?: Prisma.InventoryCreateOrConnectWithoutVariantInput;
    connect?: Prisma.InventoryWhereUniqueInput;
};
export type InventoryUncheckedCreateNestedOneWithoutVariantInput = {
    create?: Prisma.XOR<Prisma.InventoryCreateWithoutVariantInput, Prisma.InventoryUncheckedCreateWithoutVariantInput>;
    connectOrCreate?: Prisma.InventoryCreateOrConnectWithoutVariantInput;
    connect?: Prisma.InventoryWhereUniqueInput;
};
export type InventoryUpdateOneWithoutVariantNestedInput = {
    create?: Prisma.XOR<Prisma.InventoryCreateWithoutVariantInput, Prisma.InventoryUncheckedCreateWithoutVariantInput>;
    connectOrCreate?: Prisma.InventoryCreateOrConnectWithoutVariantInput;
    upsert?: Prisma.InventoryUpsertWithoutVariantInput;
    disconnect?: Prisma.InventoryWhereInput | boolean;
    delete?: Prisma.InventoryWhereInput | boolean;
    connect?: Prisma.InventoryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.InventoryUpdateToOneWithWhereWithoutVariantInput, Prisma.InventoryUpdateWithoutVariantInput>, Prisma.InventoryUncheckedUpdateWithoutVariantInput>;
};
export type InventoryUncheckedUpdateOneWithoutVariantNestedInput = {
    create?: Prisma.XOR<Prisma.InventoryCreateWithoutVariantInput, Prisma.InventoryUncheckedCreateWithoutVariantInput>;
    connectOrCreate?: Prisma.InventoryCreateOrConnectWithoutVariantInput;
    upsert?: Prisma.InventoryUpsertWithoutVariantInput;
    disconnect?: Prisma.InventoryWhereInput | boolean;
    delete?: Prisma.InventoryWhereInput | boolean;
    connect?: Prisma.InventoryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.InventoryUpdateToOneWithWhereWithoutVariantInput, Prisma.InventoryUpdateWithoutVariantInput>, Prisma.InventoryUncheckedUpdateWithoutVariantInput>;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type InventoryCreateWithoutVariantInput = {
    id?: string;
    quantity?: number;
    reserved?: number;
    updatedAt?: Date | string;
};
export type InventoryUncheckedCreateWithoutVariantInput = {
    id?: string;
    quantity?: number;
    reserved?: number;
    updatedAt?: Date | string;
};
export type InventoryCreateOrConnectWithoutVariantInput = {
    where: Prisma.InventoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.InventoryCreateWithoutVariantInput, Prisma.InventoryUncheckedCreateWithoutVariantInput>;
};
export type InventoryUpsertWithoutVariantInput = {
    update: Prisma.XOR<Prisma.InventoryUpdateWithoutVariantInput, Prisma.InventoryUncheckedUpdateWithoutVariantInput>;
    create: Prisma.XOR<Prisma.InventoryCreateWithoutVariantInput, Prisma.InventoryUncheckedCreateWithoutVariantInput>;
    where?: Prisma.InventoryWhereInput;
};
export type InventoryUpdateToOneWithWhereWithoutVariantInput = {
    where?: Prisma.InventoryWhereInput;
    data: Prisma.XOR<Prisma.InventoryUpdateWithoutVariantInput, Prisma.InventoryUncheckedUpdateWithoutVariantInput>;
};
export type InventoryUpdateWithoutVariantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reserved?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InventoryUncheckedUpdateWithoutVariantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reserved?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InventorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    variantId?: boolean;
    quantity?: boolean;
    reserved?: boolean;
    updatedAt?: boolean;
    variant?: boolean | Prisma.ProductVariantDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["inventory"]>;
export type InventorySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    variantId?: boolean;
    quantity?: boolean;
    reserved?: boolean;
    updatedAt?: boolean;
    variant?: boolean | Prisma.ProductVariantDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["inventory"]>;
export type InventorySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    variantId?: boolean;
    quantity?: boolean;
    reserved?: boolean;
    updatedAt?: boolean;
    variant?: boolean | Prisma.ProductVariantDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["inventory"]>;
export type InventorySelectScalar = {
    id?: boolean;
    variantId?: boolean;
    quantity?: boolean;
    reserved?: boolean;
    updatedAt?: boolean;
};
export type InventoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "variantId" | "quantity" | "reserved" | "updatedAt", ExtArgs["result"]["inventory"]>;
export type InventoryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    variant?: boolean | Prisma.ProductVariantDefaultArgs<ExtArgs>;
};
export type InventoryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    variant?: boolean | Prisma.ProductVariantDefaultArgs<ExtArgs>;
};
export type InventoryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    variant?: boolean | Prisma.ProductVariantDefaultArgs<ExtArgs>;
};
export type $InventoryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Inventory";
    objects: {
        variant: Prisma.$ProductVariantPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        variantId: string;
        quantity: number;
        reserved: number;
        updatedAt: Date;
    }, ExtArgs["result"]["inventory"]>;
    composites: {};
};
export type InventoryGetPayload<S extends boolean | null | undefined | InventoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InventoryPayload, S>;
export type InventoryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InventoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InventoryCountAggregateInputType | true;
};
export interface InventoryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Inventory'];
        meta: {
            name: 'Inventory';
        };
    };
    findUnique<T extends InventoryFindUniqueArgs>(args: Prisma.SelectSubset<T, InventoryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InventoryClient<runtime.Types.Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends InventoryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InventoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InventoryClient<runtime.Types.Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends InventoryFindFirstArgs>(args?: Prisma.SelectSubset<T, InventoryFindFirstArgs<ExtArgs>>): Prisma.Prisma__InventoryClient<runtime.Types.Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends InventoryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InventoryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InventoryClient<runtime.Types.Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends InventoryFindManyArgs>(args?: Prisma.SelectSubset<T, InventoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends InventoryCreateArgs>(args: Prisma.SelectSubset<T, InventoryCreateArgs<ExtArgs>>): Prisma.Prisma__InventoryClient<runtime.Types.Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends InventoryCreateManyArgs>(args?: Prisma.SelectSubset<T, InventoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends InventoryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, InventoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends InventoryDeleteArgs>(args: Prisma.SelectSubset<T, InventoryDeleteArgs<ExtArgs>>): Prisma.Prisma__InventoryClient<runtime.Types.Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends InventoryUpdateArgs>(args: Prisma.SelectSubset<T, InventoryUpdateArgs<ExtArgs>>): Prisma.Prisma__InventoryClient<runtime.Types.Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends InventoryDeleteManyArgs>(args?: Prisma.SelectSubset<T, InventoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends InventoryUpdateManyArgs>(args: Prisma.SelectSubset<T, InventoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends InventoryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, InventoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends InventoryUpsertArgs>(args: Prisma.SelectSubset<T, InventoryUpsertArgs<ExtArgs>>): Prisma.Prisma__InventoryClient<runtime.Types.Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends InventoryCountArgs>(args?: Prisma.Subset<T, InventoryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InventoryCountAggregateOutputType> : number>;
    aggregate<T extends InventoryAggregateArgs>(args: Prisma.Subset<T, InventoryAggregateArgs>): Prisma.PrismaPromise<GetInventoryAggregateType<T>>;
    groupBy<T extends InventoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InventoryGroupByArgs['orderBy'];
    } : {
        orderBy?: InventoryGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: InventoryFieldRefs;
}
export interface Prisma__InventoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    variant<T extends Prisma.ProductVariantDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductVariantDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductVariantClient<runtime.Types.Result.GetResult<Prisma.$ProductVariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface InventoryFieldRefs {
    readonly id: Prisma.FieldRef<"Inventory", 'String'>;
    readonly variantId: Prisma.FieldRef<"Inventory", 'String'>;
    readonly quantity: Prisma.FieldRef<"Inventory", 'Int'>;
    readonly reserved: Prisma.FieldRef<"Inventory", 'Int'>;
    readonly updatedAt: Prisma.FieldRef<"Inventory", 'DateTime'>;
}
export type InventoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventorySelect<ExtArgs> | null;
    omit?: Prisma.InventoryOmit<ExtArgs> | null;
    include?: Prisma.InventoryInclude<ExtArgs> | null;
    where: Prisma.InventoryWhereUniqueInput;
};
export type InventoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventorySelect<ExtArgs> | null;
    omit?: Prisma.InventoryOmit<ExtArgs> | null;
    include?: Prisma.InventoryInclude<ExtArgs> | null;
    where: Prisma.InventoryWhereUniqueInput;
};
export type InventoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventorySelect<ExtArgs> | null;
    omit?: Prisma.InventoryOmit<ExtArgs> | null;
    include?: Prisma.InventoryInclude<ExtArgs> | null;
    where?: Prisma.InventoryWhereInput;
    orderBy?: Prisma.InventoryOrderByWithRelationInput | Prisma.InventoryOrderByWithRelationInput[];
    cursor?: Prisma.InventoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InventoryScalarFieldEnum | Prisma.InventoryScalarFieldEnum[];
};
export type InventoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventorySelect<ExtArgs> | null;
    omit?: Prisma.InventoryOmit<ExtArgs> | null;
    include?: Prisma.InventoryInclude<ExtArgs> | null;
    where?: Prisma.InventoryWhereInput;
    orderBy?: Prisma.InventoryOrderByWithRelationInput | Prisma.InventoryOrderByWithRelationInput[];
    cursor?: Prisma.InventoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InventoryScalarFieldEnum | Prisma.InventoryScalarFieldEnum[];
};
export type InventoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventorySelect<ExtArgs> | null;
    omit?: Prisma.InventoryOmit<ExtArgs> | null;
    include?: Prisma.InventoryInclude<ExtArgs> | null;
    where?: Prisma.InventoryWhereInput;
    orderBy?: Prisma.InventoryOrderByWithRelationInput | Prisma.InventoryOrderByWithRelationInput[];
    cursor?: Prisma.InventoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InventoryScalarFieldEnum | Prisma.InventoryScalarFieldEnum[];
};
export type InventoryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventorySelect<ExtArgs> | null;
    omit?: Prisma.InventoryOmit<ExtArgs> | null;
    include?: Prisma.InventoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InventoryCreateInput, Prisma.InventoryUncheckedCreateInput>;
};
export type InventoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.InventoryCreateManyInput | Prisma.InventoryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type InventoryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventorySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InventoryOmit<ExtArgs> | null;
    data: Prisma.InventoryCreateManyInput | Prisma.InventoryCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.InventoryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type InventoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventorySelect<ExtArgs> | null;
    omit?: Prisma.InventoryOmit<ExtArgs> | null;
    include?: Prisma.InventoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InventoryUpdateInput, Prisma.InventoryUncheckedUpdateInput>;
    where: Prisma.InventoryWhereUniqueInput;
};
export type InventoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.InventoryUpdateManyMutationInput, Prisma.InventoryUncheckedUpdateManyInput>;
    where?: Prisma.InventoryWhereInput;
    limit?: number;
};
export type InventoryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventorySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InventoryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InventoryUpdateManyMutationInput, Prisma.InventoryUncheckedUpdateManyInput>;
    where?: Prisma.InventoryWhereInput;
    limit?: number;
    include?: Prisma.InventoryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type InventoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventorySelect<ExtArgs> | null;
    omit?: Prisma.InventoryOmit<ExtArgs> | null;
    include?: Prisma.InventoryInclude<ExtArgs> | null;
    where: Prisma.InventoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.InventoryCreateInput, Prisma.InventoryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.InventoryUpdateInput, Prisma.InventoryUncheckedUpdateInput>;
};
export type InventoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventorySelect<ExtArgs> | null;
    omit?: Prisma.InventoryOmit<ExtArgs> | null;
    include?: Prisma.InventoryInclude<ExtArgs> | null;
    where: Prisma.InventoryWhereUniqueInput;
};
export type InventoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InventoryWhereInput;
    limit?: number;
};
export type InventoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventorySelect<ExtArgs> | null;
    omit?: Prisma.InventoryOmit<ExtArgs> | null;
    include?: Prisma.InventoryInclude<ExtArgs> | null;
};
