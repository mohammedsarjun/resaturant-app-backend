export class BaseRepository<
  TModel,
  TCreate,
  TUpdate,
  TId = number
> {
  protected model: {
    create(args: { data: TCreate }): Promise<TModel>;
    findUnique(args: { where: { id: TId } }): Promise<TModel | null>;
    findMany(args?: any): Promise<TModel[]>;
    count(args?: any): Promise<number>;
    update(args: { where: { id: TId }; data: TUpdate }): Promise<TModel>;
    delete(args: { where: { id: TId } }): Promise<TModel>;
  };

  constructor(model: {
    create(args: { data: TCreate }): Promise<TModel>;
    findUnique(args: { where: { id: TId } }): Promise<TModel | null>;
    findMany(args?: any): Promise<TModel[]>;
    count(args?: any): Promise<number>;
    update(args: { where: { id: TId }; data: TUpdate }): Promise<TModel>;
    delete(args: { where: { id: TId } }): Promise<TModel>;
  }) {
    this.model = model;
  }

  async create(data: TCreate): Promise<TModel> {
    return this.model.create({ data });
  }

  async findById(id: TId): Promise<TModel | null> {
    return this.model.findUnique({ where: { id } });
  }

  async findAll(): Promise<TModel[]> {
    return this.model.findMany();
  }

  async update(id: TId, data: TUpdate): Promise<TModel> {
    return this.model.update({ where: { id }, data });
  }

  async delete(id: TId): Promise<TModel> {
    return this.model.delete({ where: { id } });
  }
}