export interface BaseRepositoryInterface<TModel, TCreate, TUpdate, TId = number> {
    create(data: TCreate): Promise<TModel>;
    findAll(): Promise<TModel[]>;
    findById(id: TId): Promise<TModel | null>;
    update(id: TId, data: TUpdate): Promise<TModel>;
    delete(id: TId): Promise<TModel>;
}
