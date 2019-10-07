export default (sequelize, DataTypes) => {
  const Hack = sequelize.define('hack', {
    id: {
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      type: DataTypes.UUID,
    },
    localaddress: {
      type: DataTypes.STRING,
    },
    externaladdress: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    user: {
      type: DataTypes.STRING,
    },
  }, {
    deletedAt: 'deletedAt',
    tableName: 'hackeds',
  });

  return Hack;
};
