/* eslint-disable class-methods-use-this */
export interface CategoryProperties {
    name: string;
    description?: string;
    isActive?: boolean;
    createdAt?: Date;
}

export class Category implements CategoryProperties {
  constructor(public readonly properties: CategoryProperties) {
    if (!this.properties) {
      throw new Error('Category is null or undefined!');
    }
    this.name = this.properties.name;
    this.description = this.properties.description;
    this.isActive = this.properties.isActive;
    this.properties.createdAt = properties.createdAt ?? new Date();
  }

  get name(): string {
    return this.properties.name;
  }

  private set name(value: string) {
    if (value === null || value === undefined || value.trim().length === 0) {
      throw new Error('Category name is required!');
    }
  }

  get description(): string | undefined {
    return this.properties.description;
  }

  private set description(value: string) {
    this.properties.description = value ?? null;
  }

  get isActive(): boolean | undefined {
    return this.properties.isActive;
  }

  private set isActive(value: boolean) {
    this.properties.isActive = value ?? true;
  }

  get createdAt(): Date | undefined {
    return this.properties.createdAt;
  }
}
