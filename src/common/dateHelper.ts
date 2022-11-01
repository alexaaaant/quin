export const dateHelper = {
  getEdgeDate: (offset: number) => {
    const currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() + offset);

    return new Date(currentDate).toISOString();
  }
};
