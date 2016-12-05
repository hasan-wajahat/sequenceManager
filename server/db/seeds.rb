# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongsseqIDe the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Sequence.create([{
                     seq: 40,
                     seqID: 'sq001',
                     name: 'Contact'
                 },
                 {
                     seq: 41,
                     seqID: 'sq002',
                     name: 'Meeting'
                 },
                 {
                     seq: 55,
                     seqID: 'sq003',
                     name: 'sq003'
                 }])