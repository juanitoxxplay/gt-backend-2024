import { PurcharseOrderDB } from "../config";
import { PurcharseOrderInterface } from "../interfaces";

class PurcharseOrderService {
  async getAll(): Promise<{ status: number; message: string; data: any }> {
    try {
      const orders = await PurcharseOrderDB.findAll(); 
      return { status: 200, message: "Órdenes obtenidas correctamente", data: orders };
    } catch (error) {
      return { status: 500, message: "Error al obtener las órdenes", data: error };
    }
  }

  async getOne(id: string): Promise<{ status: number; message: string; data: any }> {
    try {
      const order = await PurcharseOrderDB.findByPk(id); 
      if (!order) {
        return { status: 404, message: "Orden no encontrada", data: null };
      }
      return { status: 200, message: "Orden encontrada", data: order };
    } catch (error) {
      return { status: 500, message: "Error al obtener la orden", data: error };
    }
  }

  async create(order: PurcharseOrderInterface): Promise<{ status: number; message: string; data: any }> {
    try {
      const newOrder = await PurcharseOrderDB.create(order as any); 
      return { status: 201, message: "Orden creada correctamente", data: newOrder };
    } catch (error) {
      return { status: 500, message: "Error al crear la orden", data: error };
    }
  }

  async update(id: string, order: PurcharseOrderInterface): Promise<{ status: number; message: string; data: any }> {
    try {
      const [updated] = await PurcharseOrderDB.update(order as any, { where: { id } }); 
      if (!updated) {
        return { status: 404, message: "Orden no encontrada", data: null };
      }
      const updatedOrder = await PurcharseOrderDB.findByPk(id); 
      return { status: 200, message: "Orden actualizada correctamente", data: updatedOrder };
    } catch (error) {
      return { status: 500, message: "Error al actualizar la orden", data: error };
    }
  }

  async delete(id: string): Promise<{ status: number; message: string; data: any }> {
    try {
      const deleted = await PurcharseOrderDB.destroy({ where: { id } }); 
      if (!deleted) {
        return { status: 404, message: "Orden no encontrada", data: null };
      }
      return { status: 200, message: "Orden eliminada correctamente", data: null };
    } catch (error) {
      return { status: 500, message: "Error al eliminar la orden", data: error };
    }
  }
}

export const purcharseOrderService = new PurcharseOrderService();
