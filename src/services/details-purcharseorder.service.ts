import { DetailsPurcharseOrderModelDB } from "../config";
import { DetailsPurcharseOrderInterface } from "../interfaces";

class DetailsPurcharseOrderService {
  async getAll(): Promise<{ status: number; message: string; data: any }> {
    try {
      const details = await DetailsPurcharseOrderModelDB.findAll(); 
      return { status: 200, message: "Detalles obtenidos correctamente", data: details };
    } catch (error) {
      return { status: 500, message: "Error al obtener los detalles", data: error };
    }
  }

  async getOne(id: string): Promise<{ status: number; message: string; data: any }> {
    try {
      const detail = await DetailsPurcharseOrderModelDB.findByPk(id); 
      if (!detail) {
        return { status: 404, message: "Detalle no encontrado", data: null };
      }
      return { status: 200, message: "Detalle encontrado", data: detail };
    } catch (error) {
      return { status: 500, message: "Error al obtener el detalle", data: error };
    }
  }

  async create(detail: DetailsPurcharseOrderInterface): Promise<{ status: number; message: string; data: any }> {
    try {
      const newDetail = await DetailsPurcharseOrderModelDB.create(detail as any); 
      return { status: 201, message: "Detalle creado correctamente", data: newDetail };
    } catch (error) {
      return { status: 500, message: "Error al crear el detalle", data: error };
    }
  }

  async update(id: string, detail: DetailsPurcharseOrderInterface): Promise<{ status: number; message: string; data: any }> {
    try {
      const [updated] = await DetailsPurcharseOrderModelDB.update(detail as any, { where: { id } });
      if (!updated) {
        return { status: 404, message: "Detalle no encontrado", data: null };
      }
      const updatedDetail = await DetailsPurcharseOrderModelDB.findByPk(id); 
      return { status: 200, message: "Detalle actualizado correctamente", data: updatedDetail };
    } catch (error) {
      return { status: 500, message: "Error al actualizar el detalle", data: error };
    }
  }

  async delete(id: string): Promise<{ status: number; message: string; data: any }> {
    try {
      const deleted = await DetailsPurcharseOrderModelDB.destroy({ where: { id } }); 
      if (!deleted) {
        return { status: 404, message: "Detalle no encontrado", data: null };
      }
      return { status: 200, message: "Detalle eliminado correctamente", data: null };
    } catch (error) {
      return { status: 500, message: "Error al eliminar el detalle", data: error };
    }
  }
}

export const detailsPurcharseOrderService = new DetailsPurcharseOrderService();
